import Answers from "../Answers";
import ProgressBar from "../Progressbar";
import MiniPlayer from "../Miniplayer";
export default function Quiz(){
    return(
        <>
            <h1>Pick three of your favourite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </>
    )
}