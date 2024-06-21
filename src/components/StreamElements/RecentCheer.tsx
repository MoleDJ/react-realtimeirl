import globalStore from "@store/globalStore";

interface ICheerProps {
  amount: number
  name: string;
}

const RecentCheer = () => {
  const value = globalStore.streamElements['cheer-recent'].get();

  return (
    <div className="recent-cheer">
      {value && (
        <>
          <div className="se-heading">Bits recientes:</div>
          <div className="recent-cheer-data">
            {value.map(
              (cheer: ICheerProps, index: number) => {
                if (index > 0 && index <= 4) {
                  return (
                    <div key={index}>
                      {cheer.name && `${cheer.name} - ${cheer.amount} bits `}
                    </div>
                  );
                } else return null;
              }
            )}
          </div>
        </>
      )}
      <br />
    </div>
  );
};

export default RecentCheer;