"use client"
import { useState } from 'react'
import World from './World'
import { Camera } from '../model/camera';

export default function Viewport() {
    const [cam, setCam] = useState<Camera>({ tx: 0, ty: 0, scale: 1 });
    return (
        <World camera={cam} />
    )
}
