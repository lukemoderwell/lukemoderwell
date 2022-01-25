import React, { useState } from 'react'

export default function ThemeSwitcher() {
  const themeOptions = ['light', 'dark', 'colorful']
  const [theme, setTheme] = useState(themeOptions[0])
  const [isChoosingTheme, setIsChoosingTheme] = useState(false)
  return (
    <>
      <div
        className="themeSwitchContainer"
        onClick={() => setIsChoosingTheme(!isChoosingTheme)}
      >
        {theme}
        {isChoosingTheme && (
          <ul>
            {themeOptions.map((option) => (
              <li key={option} onClick={() => setTheme(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <style jsx>{`
        .themeSwitchContainer {
          width: 80px;
          height: 80px;
          margin-left: auto;
        }
      `}</style>
    </>
  )
}
