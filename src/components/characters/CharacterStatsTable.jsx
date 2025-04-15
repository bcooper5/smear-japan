import React, { useState } from 'react'

// src\components\characters\CharacterStatsTable.jsx
import {initialCaps} from '../../methods/text-methods'

const statsMap = {
  "might": [
    "long-blade",
    "block",
    "polearm",
    "throw-large-object",
    "blunt",
    "climbing",
    "boxing",
    "upper-body",
    "lower-body",
    "intimidation"
  ],

  "reflex": [
      "dodge",
      "core-muscles",
      "riding",
      "move-quietly",
      "sleight-of-hand",
      "escape-artist",
      "throw-small-object",
      "acrobatics",
      "precision",
      "short-blade"
  ],

  "endurance": [
      "light-armor",
      "heavy-armor",
      "archery",
      "wrestling",
      "damage-resistance",
      "immune-system",
      "metabolism",
      "calluses"
  ],

  "sense": [
      "hide-from-sight",
      "vision",
      "hearing",
      "investigation",
      "history",
      "medicine",
      "persuasion",
      "public-speaking",
      "religion",
      "literacy",
      "memory",
      "logic",
      "culture",
      "divination",
      "willpower",
      "security"
  ],

  "arcane": [
      "destruction",
      "conjuration",
      "restoration",
      "illusion",
      "alteration",
      "mysticism"
  ]
};

const CharacterStatsTable = ({characterStatBlock}) => {
  
  const [statsTableIsHidden, setStatsTableIsHidden] = useState(true);
  
  return (
    <div className='character-stats-widget w-fit'>

      <button className={`bg-gray-400 active:bg-gray-500 text-white p-2 cursor-pointer font-bold sticky top-0 drop-shadow`}
        onClick={()=>{setStatsTableIsHidden(!statsTableIsHidden)}}
      >
        { statsTableIsHidden ? 'Expand' : 'Collapse' } Character Stats
      </button>

      <div className={`character-stats-table bg-gray-500 ${statsTableIsHidden ? 'max-h-0' : 'max-h-[9999px]'} transition-all duration-400 overflow-hidden md:flex`}>
        {
          statsTableIsHidden ? '' : Object.keys(statsMap).map( majorStatName => {
            const majorStatValue = characterStatBlock.majorStats[`${majorStatName}`];

            return ( // MAJOR STAT
              <>
                <div className={`major-stat-col ${majorStatName}-col select-none outline`} key={majorStatName}>
                  
                  <div className='p-2 major-stat-heading flex bg-black text-white font-bold border border-white border-t-0'>
                    <div className='major-stat-label p-2 w-30'>{majorStatName.toUpperCase()}</div>
                    <div className='major-stat-value p-2 bg-white text-black rounded-full text-xl'>{majorStatValue}</div>
                  </div>
                {
                  statsMap[majorStatName].map( minorStatName => {
                    const minorStatValue = characterStatBlock.minorStats[`${minorStatName}`];
                    console.log(minorStatValue);

                    return ( // MINOR STAT
                    <div key={minorStatName} className={`minor-stat-row ${minorStatName}-row p-3 border-b flex items-center justify-left`}>
                      <div className='minor-stat-label w-[150px]'>{(initialCaps(minorStatName))}</div>
                      <div className={`minor-stat-value mx-4 ${minorStatValue > 0 ? 'font-bold' : ''}`}>{minorStatValue}</div>
                      <button
                        className={`minor-stat-total ${(minorStatValue + majorStatValue) > majorStatValue ? 'bg-emerald-500' : 'text-white'} font-bold bg-black size-8 flex items-center justify-center`}>
                          {minorStatValue + majorStatValue}
                      </button>
                    </div>
                  )})
                }
                </div>
              </>
            )

          })
        }

      </div>
    </div>
  )
}

export default CharacterStatsTable