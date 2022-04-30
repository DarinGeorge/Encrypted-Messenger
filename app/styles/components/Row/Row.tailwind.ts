import tw from 'twrnc';

export const styles = (userMatch: boolean) => {
  return {
    container: tw`flex-row px-3`,
    alignment: tw`${userMatch ? 'justify-end' : 'justify-start'}`,
  };
};
