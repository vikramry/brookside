import ActivityCard from "@/components/activityCard"

const data=[
    {
        content:'Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.',
        heading:'Art & Craft Corner',
        imgURL:"/assets/images/activitycard1.png",
        isReverse:false

    },{
        content:'Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.',
        heading:'Language Lab',
        imgURL:"/assets/images/activitycard2.png",
        isReverse:true

    },
    {
        content:'Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.',
        heading:'STEAM Corner',
        imgURL:"/assets/images/activitycard1.png",
        isReverse:false

    },
    {
        content:'Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.',
        heading:'Dance & Drama Studio',
        imgURL:"/assets/images/activitycard2.png",
        isReverse:true

    },
    {
        content:'Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.',
        heading:'Role Play Area',
        imgURL:"/assets/images/activitycard1.png",
        isReverse:false

    },
    {
        content:'Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.',
        heading:'Play Area',
        imgURL:"/assets/images/activitycard2.png",
        isReverse:true

    },
    {
        content:'Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.',
        heading:'AV Room',
        imgURL:"/assets/images/activitycard1.png",
        isReverse:false

    },
    {
        content:'Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.',
        heading:'Library',
        imgURL:"/assets/images/activitycard2.png",
        isReverse:true

    },
    
]
const page = () => {
  return (
    <div>
      <div>
        {/* /assets/images/mainbg1.jpg */}
        <div>
            <img src="/assets/images/activitiesbg.png"/>
        </div>
        <div className="w-full flex justify-center" >
        <div className="text-center max-w-[900px] flex-col justify-center ">
            <h1 className="text-[#F3A20C] text-[52px]">ILC’s</h1>
            <h3 className="text-[#2E2B4F] text-[36px]">Innovative Learning Centres</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias maiores quas fuga aliquam! Rerum ex quas vero, magnam sapiente minima quis inventore, at possimus natus, recusandae consequuntur! Officiis, consequuntur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias maiores quas fuga aliquam! Rerum ex quas vero, magnam sapiente minima quis inventore, at possimus natus, recusandae consequuntur! Officiis, consequuntur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias maiores quas fuga aliquam! Rerum ex quas vero, magnam sapiente minima quis inventore, at possimus natus, recusandae consequuntur! Officiis, consequuntur.</p>

        </div>
      </div>
      <div>
        {data?.map((item)=>{
            return(
                <ActivityCard content={item?.content} heading={item?.heading} imgURL={item?.imgURL} isReverse={item?.isReverse}/>
            )
        })}
        </div>
      </div>

    </div>
  )
}

export default page
