import Link from "next/link";
import Theme from "../components/theme";

const Index = (props) => {
  return <div>Index Page1
    <br></br>
    <Link href="/home">
      <a>Home</a>
    </Link>
  </div>;
};

export default Theme(Index);
