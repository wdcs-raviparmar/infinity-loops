import LoopVideo from './LoopVideo.jsx';

// Hero background: a tilted wall of video tiles scrolling in opposite directions (2 columns on phones, 3 on tablets, 4 on wide screens).
// Each column lists its clips twice so the CSS scroll loops seamlessly.
const columns = [
  { direction: 'up', clips: ['social', 'content'] },
  { direction: 'down', clips: ['web', 'hero'] },
  { direction: 'up', clips: ['approach', 'ads'], size: 'md' },
  { direction: 'down', clips: ['strategy', 'social'], size: 'lg' },
];

export default function ReelWall({ paused }) {
  return <div className="reel-wall" aria-hidden="true">
    <div className="reel-track">
      {columns.map((column, index) => <div key={index} className={`reel-col reel-${column.direction}${column.size ? ` reel-${column.size}` : ''}`}>
        {[...column.clips, ...column.clips].map((clip, tile) => <div className="reel-tile" key={tile}><LoopVideo src={`/media/${clip}.mp4`} paused={paused} /></div>)}
      </div>)}
    </div>
  </div>;
}
