import { useState } from "react";
import { Heart } from "lucide-react";

type SkillCardProps = {
    name: string;
}
    



const  SkillCard =({ name }: SkillCardProps) => {
const [liked, setLiked] = useState(false);
const likes = liked ? 1 : 0;


    return ( 

        <article>
         
          <p>skill</p> 
          <h2>{name}</h2> 
          <p>{likes} {likes ===1? 'like' : 'likes'}</p>
        <button	onClick={() => setLiked((current) => !current)} type="button">
					<Heart
						className={liked ? "fill-current text-(--lagoon-deep" : ""}
						size={18}
					/>
          </button>
        </article>
     );
}
 
export default SkillCard ;
 