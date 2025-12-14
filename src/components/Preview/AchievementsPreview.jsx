import Subheading from "./common/Subheading";
import Bullets from "./common/Bullets";
export default function AchievementsPreview({ achievements }) {
  return (
    <div>
      <Subheading>Achievements</Subheading>
      <Bullets description={achievements}></Bullets>
    </div>
  );
}
