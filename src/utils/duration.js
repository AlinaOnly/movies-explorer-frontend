
export const durationTime = (time) =>{
    const minutes = time % 60;
    const hours = Math.floor(time / 60);
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
};

