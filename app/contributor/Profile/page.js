import MyProfile from "components/MyProfile";
import { user } from "../../../static";

export default function page() {
  return <MyProfile user={user} />;
}
