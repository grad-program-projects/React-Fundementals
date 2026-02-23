
interface Player {
    name: string;
    score: number;
}
interface LearderboardProp{
    players: Player[];
} 
export default function Leaderboard({players}: LearderboardProp){
   const sorted= [...players].sort((a,b) => b.score - a.score);

    const item = sorted.map((player,index) => {
        
            let medal;
            if (index === 0){
                medal = '🥇'
            }else if (index ===1){
                medal = '🥈'
            }else if (index ===2){
                medal = '🥉'
            }else {
                medal = index +1
            }

       return <li>
            {player.name} - Rank: {medal}
        </li>

    });
    return <ul>{item}</ul>
}
