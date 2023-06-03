"use client"
import React, { useEffect, useRef } from "react";

const chars = "日本語☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

interface GlitchOptions {
  selector: React.RefObject<HTMLElement>;
  index: number;
  numberOfGlitchedLetter?: number;
  timeGlitch: number;
  timePerLetter: number;
  timeBetweenGlitch: number;
}

class Glitch {
  private selector: React.RefObject<HTMLElement>;
  private index: number;
  private numberOfGlitchedLetter: number;
  private innerText: string;
  private charArray: string[];
  private charIndex: number[];
  private timeGlitch: number;
  private timeBetweenGlitch: number;
  private timePerLetter: number;
  private maxCount: number;
  private count: number;

  constructor(options: GlitchOptions) {
    this.selector = options.selector;
    this.index = options.index;
    this.numberOfGlitchedLetter = options.numberOfGlitchedLetter || 0;
    this.innerText = "";
    this.charArray = [];
    this.charIndex = [];
    this.timeGlitch = options.timeGlitch;
    this.timeBetweenGlitch = options.timeBetweenGlitch;
    this.timePerLetter = options.timePerLetter;
    this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
    this.count = 0;
  }

  public init() {
    this.innerText = this.selector.current?.innerText || "";
    this.charArray = this.innerText.split("");
    if (
      this.numberOfGlitchedLetter === 0 ||
      this.numberOfGlitchedLetter > this.innerText.length
    ) {
      this.numberOfGlitchedLetter = this.innerText.length;
    }
    this.defineCharIndexToRandomize();
  }

  private defineCharIndexToRandomize() {
    this.charIndex = [];
    for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
      let randCharIndex = Math.floor(Math.random() * this.charArray.length);
      this.charIndex.push(randCharIndex);
    }
  }

  private randomize() {
    // Copy the char array
    let randomString = Array.from(this.charArray);

    // Randomize char
    for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
      let randIndex = Math.floor(Math.random() * chars.length);
      let randCharIndex = this.charIndex[i];
      if (randomString[randCharIndex] !== " ") {
        randomString[randCharIndex] = chars[randIndex];
      }
    }
    this.selector.current!.innerText = randomString.join("");
  }

  private update() {
    if (this.count >= this.maxCount - 1) {
      this.selector.current!.innerText = this.innerText;
      this.defineCharIndexToRandomize();
      let ctx = this;
      let wait = setTimeout(function () {
        ctx.count = 0;
      }, this.timeBetweenGlitch);
    } else {
      this.randomize();
      this.count++;
    }
  }

  public glitch() {
    let ctx = this;
    let interval = setInterval(function () {
      ctx.update();
    }, this.timePerLetter);
    return () => {
      clearInterval(interval);
    };
  }
}

const GlitchApp = ({ children }) => {
  const arrayElements = useRef<HTMLElement[]>([]);
  const intervalIds = useRef<NodeJS.Timeout[]>([]);

  const startGlitchAnimation = (index: number) => {
    const glitch = arrayElements.current[index];
    const intervalId = setInterval(() => {
      glitch.innerText = generateRandomText(glitch.innerText);
    }, 85);
    intervalIds.current[index] = intervalId;
  };

  const stopGlitchAnimation = (index: number) => {
    const glitch = arrayElements.current[index];
    clearInterval(intervalIds.current[index]);
    glitch.innerText = glitch.dataset.originalText || '';
  };

  const generateRandomText = (text: string) => {
    const chars = "日本語☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let randomText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        randomText += randomChar;
      } else {
        randomText += " ";
      }
    }
    return randomText;
  };

  useEffect(() => {
    arrayElements.current = Array.from(document.querySelectorAll(".content")) as HTMLElement[];
    arrayElements.current.forEach((glitch, index) => {
      glitch.dataset.originalText = glitch.innerText;
      glitch.addEventListener("mouseenter", () => startGlitchAnimation(index));
      glitch.addEventListener("mouseleave", () => stopGlitchAnimation(index));
    });

    return () => {
      arrayElements.current.forEach((glitch, index) => {
        glitch.removeEventListener("mouseenter", () => startGlitchAnimation(index));
        glitch.removeEventListener("mouseleave", () => stopGlitchAnimation(index));
        stopGlitchAnimation(index);
      });
    };
  }, []);

  return (
    <div className="glitch">
      {children}
    </div>
  );
};

export default GlitchApp;
