import tw from 'twrnc';

export const styles = (userMatch: boolean) => {
  return {
    container: tw`px-3 py-2 rounded mt-5`,
    bubble: tw`${userMatch ? 'bg-blue-500' : 'bg-gray-300'}`,
  };
};
