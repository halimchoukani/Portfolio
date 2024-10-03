import { Arrow } from "./SVG/Arrow";

function Card({ num, img, title, desc, link }) {
  console.log(num);

  return (
    <div
      className={`card opacity-[0.3] w-full h-[70vh] relative rounded-3xl card-shadow top-[${
        num * 20
      }px] z-[100]`}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="absolute inset-0 opacity-50 rounded-3xl bg-cover bg-center"
      ></div>
      <div className="text-white absolute z-[10] bottom-0 w-full flex flex-row items-center p-4">
        <div>
          <h1 className="text-[50px] mix-blend-difference">{title}</h1>
          <p className="text-[20px] font-light mix-blend-difference">{desc}</p>
        </div>
        <a href={link} target="_blank" className="w-[30%] flex justify-end ">
          <Arrow classText="w-20 rotate-[-45deg] hover:rotate-[0deg] transition-all cursor-pointer origin-center" />
        </a>
      </div>
    </div>
  );
}

export default Card;
