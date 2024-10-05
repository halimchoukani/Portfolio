import { Arrow } from "./SVG/Arrow";

function Card({ num, img, title, desc, link, cname }) {
  return (
    <div
      className={`${cname} opacity-20 w-full h-[70vh] relative rounded-3xl card-shadow top-[${
        num * 20
      }px] z-[100] cursor-pointer text-white overflow-hidden`}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
        }}
        className="absolute inset-0 opacity-50 rounded-3xl bg-cover bg-center hover:opacity-50 hover:scale-105"
      ></div>
      <div className=" absolute z-10 bottom-0 w-full flex flex-row items-justify-between p-4">
        <div>
          <h1 className="text-[50px]">{title}</h1>
          <p className="text-[20px] font-light">{desc}</p>
        </div>
        <a href={link} target="_blank" className="w-[30%] flex justify-end ">
          <Arrow classText="w-20 rotate-[-45deg] hover:rotate-0 transition-all cursor-pointer origin-center" />
        </a>
      </div>
    </div>
  );
}

export default Card;
