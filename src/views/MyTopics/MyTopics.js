const {TopicList} = await import(`../TopicList/TopicList.js${app_version}`)


export const MyTopics = (props)=>{


   // console.log(props)
    /*
    return `
    <div>My Topics
    </div>
    `
*/
props.myTopics = true
return TopicList(props)
}