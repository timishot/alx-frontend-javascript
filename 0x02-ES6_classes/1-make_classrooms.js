import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const roomSize = [19, 20, 34];
  return roomSize.map((size) => new ClassRoom(size));
};

export default initializeRooms;
