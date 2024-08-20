export default function ProjectCard({name, description, image, repoLink, deployed}) {
    return (
        <div className="inline-block card m-10">
           <div>
               <div className="border-gray-500 border-solid border-4">
                  <div className="">
                      <img src= {image} alt= 'image'/>
                  </div>
                  <div className="">
                      <a href={deployed} className="">{name}</a>
                  </div>
               </div>
           </div>
        </div>
    );
};