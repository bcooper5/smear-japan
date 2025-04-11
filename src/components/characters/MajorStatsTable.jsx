// src\components\characters\MajorStatsTable.jsx
import {initialCaps} from '../../methods/text-methods'

const MajorStatsTable = ({ stats }) => {
  // Ensure stats is an array; provide fallback if undefined
  const statsArray = Array.isArray(stats) ? stats : [];

  // MinorStatsList component to render minor stats
  const MinorStatsList = ({ minorStatsArray }) => {
    // Check if minorStatsArray is undefined or not an array
    if (!Array.isArray(minorStatsArray) || minorStatsArray.length === 0) {
      return <div className="minor-stats-list p-2 w-full">No minor stats</div>;
    }
    return minorStatsArray.map((minorStat) => (
      <div key={minorStat.name} className="minor-stats-list w-full p-2 bg-red-400 flex justify-between">
        <div>{minorStat.name}</div>
        <div className="minor-stat-value bg-white w-4 text-center">
          {minorStat.value}
        </div>
      </div>
    ));
  };

  // MajorStatRow component to render a single major stat
  const MajorStatRow = ({ majorStat }) => (
    <div className="major-stat-row border flex w-full justify-left">
      <div className="major-stat-name w-36 p-2 font-bold flex items-center bg-green-400">
        {/* {majorStat.name.slice(0,1).toUpperCase() + majorStat.name.slice(1)} */ initialCaps(majorStat.name)}
      </div>
      <div className="major-stat-value w-10 p-2 border-l border-r font-bold bg-white flex justify-center items-center">
        {majorStat.value}
      </div>
      <div className="minor-stats-container bg-blue-500 w-full">
        <MinorStatsList minorStatsArray={majorStat.minorStats} />
      </div>
    </div>
  );

  return (
    <div id="major-stats-table" className="bg-yellow-100 border-4 p-2">
      <div className="flex flex-col">
        {statsArray.map((stat) => (
          <MajorStatRow key={stat.name} majorStat={stat} />
        ))}
      </div>
    </div>
  );
};

export default MajorStatsTable;