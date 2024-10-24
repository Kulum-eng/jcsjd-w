import AddPost from "./AddPost";
import Balance from "./Balance";
import Portafolio from "./Portafolio";
import Teams from "./Teams";
import UserCard from "./UserCard";
import UserPos from "./UserPos";

const users = [
  {
    id: 1,
    name: "Juan Pérez",
    profession: "Desarrollador de Software",
    skills: ["JavaScript", "React", "Node.js"],
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "María López",
    profession: "Diseñador Gráfico",
    skills: ["Photoshop", "Illustrator", "Figma"],
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Carlos García",
    profession: "Documentador",
    skills: ["Markdown", "Scrivener", "Confluence"],
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Ana Torres",
    profession: "Arquitecto",
    skills: ["AutoCAD", "Revit", "SketchUp"],
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Pedro Martínez",
    profession: "Médico",
    skills: ["Diagnóstico Clínico", "Cirugía General", "Anatomía"],
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

function Home() {
  return (
    <div className="home-container grid grid-cols-12 gap-6 p-8 bg-gray-100 min-h-screen">
      {/* Columna Izquierda */}
      <div className="left-column col-span-3 space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Balance />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Portafolio />
        </div>
      </div>

      {}
      <div className="center-column col-span-6 space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <AddPost />
        </div>
        <div className="space-y-4">
          {users.map((user) => (
            <div className="bg-white rounded-lg shadow-md p-4" key={user.id}>
              <UserCard userData={user} />
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="right-column col-span-3 space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <UserPos />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Teams />
        </div>
      </div>
    </div>
  );
}

export default Home;
