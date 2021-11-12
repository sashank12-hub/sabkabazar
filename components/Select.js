import Link from "next/link";
import styles from "../styles/products.module.css";
import { useRouter } from "next/router";
function Select(props) {
    console.log(props)
  const router = useRouter();
  return (
    <div className=" overall  text-white outline-none">
      <div className="select  w-screen h-12">
        <select
          id="standard-select w-full"
          onChange={(e) => {
            router.push(`${e.target.value.split(" ").join("")}`);
          }}
        >
          {props.array
            .sort((a, b) => {
              return a.order - b.order;
            })
            .map((item) => {
              return (
                <option
                  key={item.id}
                  value={`/Products/${item.name.split(" ").join("")}`}
                >
                  {item.name}
                </option>
              );
            })}4
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
}
export default Select;
