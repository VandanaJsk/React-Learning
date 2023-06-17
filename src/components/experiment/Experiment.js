import React from 'react'
import { useState } from 'react';
import './Experiment.css';

export default function Experiment() {

    const arr = ['girl1', 'girl2', 'girl3', 'girl4'];

  return (
    <div>
     {
        arr.map((e) => {
           return <li>{e}</li>
        })
     }
    </div>
  )
}
