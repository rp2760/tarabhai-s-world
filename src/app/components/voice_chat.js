import React from 'react'
import Link from "next/link";

const voice_chat = () => {
  return (
    <div>
        <h1 className='text-amber-700 bg-gray-800' >click here for chat</h1>
       <Link href="https://elevenlabs.io/app/talk-to?agent_id=agent_6001kb03xk16e0e8ythwh8jqhe3r" target='_blank'>
  <button className="bg-white text-lg animate-bounce">
    click me
  </button>
</Link>

         </div>
  )
}

export default voice_chat