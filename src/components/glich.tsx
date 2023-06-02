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

const GlitchApp = () => {
  const arrayElements = useRef<HTMLElement[]>([]);
  const glitchArray = useRef<Glitch[]>([]);

  useEffect(() => {
    arrayElements.current = Array.from(
      document.querySelectorAll(".content")
    ) as HTMLElement[];
    for (let i = 0; i < arrayElements.current.length; i++) {
      let selector = arrayElements.current[i];
      let randLetterNumber = 2 + Math.floor(Math.random() * 8);
      let randGlitchTime = 500 + Math.floor(Math.random() * 1500);
      let randGlitchPauseTime = 500 + Math.floor(Math.random() * 2500);
      let glitch = new Glitch({
        selector: { current: selector },
        index: i,
        numberOfGlitchedLetter: randLetterNumber,
        timeGlitch: 200,
        timePerLetter: 85,
        timeBetweenGlitch: randGlitchPauseTime,
      });
      glitch.init();
      glitchArray.current.push(glitch);
    }

    const update = () => {
      for (let i = 0; i < glitchArray.current.length; i++) {
        let glitch = glitchArray.current[i];
        glitch.glitch();
      }
    };

    update();

    return () => {
      glitchArray.current.forEach((glitch) => {
        glitch.glitch();
      });
    };
  }, []);

  return (
    <div className="glitch">
    
      
    </div>
  );
};

export default GlitchApp;
