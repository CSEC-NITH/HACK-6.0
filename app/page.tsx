"use client";

import React, { useState } from "react";
import TopBar from './components/TopBar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'


export default function Home() {

  return (
   <>
      <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <div className="w-full h-auto mt-14 md:mt-0">
        <img src="/hack-portrait.svg" alt="Hack Hackathon" className="w-full h-auto object-cover" />
      </div>
       <main className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto w-full">
                <MainContent />
              </main>

      <Footer />
    </div>
   </>
  );
}
