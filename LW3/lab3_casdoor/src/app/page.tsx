import dynamic from "next/dynamic";

const OAuth = dynamic(() => import("../components/OAuth"));

export default function Page() {
  return <OAuth />;
}
