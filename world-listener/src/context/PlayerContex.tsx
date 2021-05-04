import { createContext, ReactNode, useContext, useState } from "react";

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    isLooping: boolean;
    isShuffling: boolean;
    play: (episode: Episode) => void;
    togglePlay: (value?: boolean) => void;
    toggleLoop: () => void;
    toggleShuffle: () => void;
    playList: (list: Episode[], index: number) => void;
    playStep: (direction: "next" | "previous") => void;
    hasPlayerDirection: (direction: "next" | "previous") => boolean;
};

type PlayerContexProviderProps = {
    children: ReactNode;
};


export const PlayerContex = createContext({} as PlayerContextData);


export function PlayerContexProvider(props: PlayerContexProviderProps){
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setcurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLooping, setIsLooping] = useState(false)
    const [isShuffling, setIsShuffling] = useState(false)

    function play(episode){
        setEpisodeList([episode]);
        setcurrentEpisodeIndex(0);
        setIsPlaying(true);
    }

    function togglePlay(value: boolean = null){
        if (value == null){
        setIsPlaying(!isPlaying);
        } else {
        setIsPlaying(value);
        }
    }
    function toggleLoop(){
        setIsLooping(!isLooping);
    }
    function toggleShuffle(){
        setIsShuffling(!isShuffling);
    }

    function playList(list: Episode[], index: number) {
        setEpisodeList(list);
        setcurrentEpisodeIndex(index);
        setIsPlaying(true);
    }

    function playStep(direction: "next" | "previous") {
        if (isShuffling){
            setcurrentEpisodeIndex(getRandomEpisode);
            return;
        }

        const nextEpisodeIndex = currentEpisodeIndex + 1;
        const previousEpisodeIndex = currentEpisodeIndex - 1;

        if(hasPlayerDirection(direction)){
            setcurrentEpisodeIndex((direction == "next") ? nextEpisodeIndex : previousEpisodeIndex);
        } else {
            setEpisodeList([])
            setcurrentEpisodeIndex(0);
        }
    }

    function getRandomEpisode(){
        let randomIndex = currentEpisodeIndex;
        if(episodeList.length > 1){
            while(randomIndex == currentEpisodeIndex){
                randomIndex = Math.floor(Math.random() * episodeList.length);
            }
        }
        return randomIndex;
    }

    function hasPlayerDirection(direction: "next" | "previous"){
        const nextEpisodeIndex = currentEpisodeIndex + 1;
        const previousEpisodeIndex = currentEpisodeIndex - 1;
        if(direction === "next"){
            if(nextEpisodeIndex < episodeList.length){
                return true;
            }
        }else if(direction === "previous"){
            if(previousEpisodeIndex >= 0){
                return true;
            }
        } else {
            return false;
        }
    }

    return (
        <PlayerContex.Provider value={
        {
            episodeList,
            currentEpisodeIndex,
            play,
            isPlaying,
            isLooping,
            isShuffling,
            toggleLoop,
            toggleShuffle,
            togglePlay,
            playList,
            playStep,
            hasPlayerDirection
        }
        }>
            {props.children}
        </PlayerContex.Provider>
    )
}


export const usePlayer = () => {
    return useContext(PlayerContex);
}