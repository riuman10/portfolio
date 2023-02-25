import { useEffect , useState } from "react";
import supabase from "@/utils/supabase";

// Data Fetch

export async function getServerSideProps(context) {
    const { data, error } = await supabase.from("children").select().eq('id' , context.params.id).single();
    return {
      props: {
        post : data
      },
    }
  }
  

const Post = ({post}) => {
    console.log(post)
    return (
        <div>
            <p className="text-white">{post.title}</p>
        </div>
    )
}


export default Post;