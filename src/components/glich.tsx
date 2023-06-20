'use client';

import React, { useEffect, useRef } from 'react';

const chars = '日本語☺Σ×Π#-_↑←0123456789AXTZ';

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
    this.innerText = '';
    this.charArray = [];
    this.charIndex = [];
    this.timeGlitch = options.timeGlitch;
    this.timeBetweenGlitch = options.timeBetweenGlitch;
    this.timePerLetter = options.timePerLetter;
    this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
    this.count = 0;
  }

  public init() {
    this.innerText = this.selector.current?.innerText || '';
    this.charArray = this.innerText.split('');
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
      if (randomString[randCharIndex] !== ' ') {
        randomString[randCharIndex] = chars[randIndex];
      }
    }
    this.selector.current!.innerText = randomString.join('');
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

const GlitchApp: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const arrayElements = useRef<HTMLElement[]>([]);
  const intervalIds = useRef<NodeJS.Timeout[]>([]);
  const timeoutIds = useRef<NodeJS.Timeout[]>([]);

  // Function to start the glitch animation for a given index
  const startAnimation = (index: number) => {
    const glitch = arrayElements.current[index];

    // Set up interval to update glitched text every 85 milliseconds
    const intervalId = setInterval(() => {
      glitch.innerText = generateRandomText(glitch.innerText);
    }, 10);
    intervalIds.current[index] = intervalId;

    // Set up timeout to stop glitch animation after 5 seconds
    const timeoutId = setTimeout(() => stopAnimation(index), 1000);
    timeoutIds.current[index] = timeoutId;
  };

  // Function to stop the glitch animation for a given index
  const stopAnimation = (index: number) => {
    const glitch = arrayElements.current[index];

    // Clear the interval and timeout for the given index
    clearInterval(intervalIds.current[index]);
    clearTimeout(timeoutIds.current[index]);

    // Restore the original text
    glitch.innerText = glitch.dataset.originalText || '';
  };

  // Function to generate random glitched text based on the original text
  const generateRandomText = (text: string) => {
    const chars = '日本語☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
    let randomText = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        randomText += randomChar;
      } else {
        randomText += ' ';
      }
    }
    return randomText;
  };

  useEffect(() => {
    arrayElements.current = Array.from(
      document.querySelectorAll('.content')
    ) as HTMLElement[];

    arrayElements.current.forEach((glitch, index) => {
      glitch.dataset.originalText = glitch.innerText;
      glitch.addEventListener('mouseenter', () => startAnimation(index));
      glitch.addEventListener('mouseleave', () => stopAnimation(index));
    });

    return () => {
      arrayElements.current.forEach((glitch, index) => {
        glitch.removeEventListener('mouseenter', () => startAnimation(index));
        glitch.removeEventListener('mouseleave', () => stopAnimation(index));
      });
    };
  }, []);

  return <div className="glitch">{children}</div>;
};

export default GlitchApp;
