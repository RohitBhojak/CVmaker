import Subheading from "./Subheading";
import Bullets from "./Bullets";
export default function AchievementsPreview({ achievements }) {
  return (
    <div>
      <Subheading>Achievements</Subheading>
      <Bullets description={achievements}></Bullets>
    </div>
  );
}
