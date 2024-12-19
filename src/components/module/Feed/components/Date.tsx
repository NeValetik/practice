interface FeedDateParams{
    index:number;
    date:string | null;
}

const FeedDate =({date=null}:FeedDateParams) => {
  // const {offer} = params;
  return(
    <div className="text-[28px] font-bold font-sans">
      {date}
    </div>
  );
} 

export default FeedDate;