export default function dropDrownComp(notification){
    console.log("Notification: ", notification);
    return(
        <div className="relative w-[400px] h-[80px] bg-white border-b-2 border-solid border-black border-opacity-30 border-t-0 border-x-0">
            <div className="absolute flex flex-col w-9/10 h-3/4 top-1 bottom-1 my-auto ml-7 justify-center">
                <h3 className="font-Gilroy_md text-lg text-blue">
                    {notification.Notification_message}
                </h3>
                <p className="font-Gilroy_md text-md text-blue">
                    {formatTimestamp(notification.Notification_time)}
                </p>
            </div>
        </div>
    );
} 

function formatTimestamp(timestamp) {
    // Convert the timestamp to a Date object
    const date = new Date(timestamp);
  
    // Adjust the date to UTC+7
    date.setHours(date.getHours() + 7);
  
    // Define the format options
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    };
  
    // Format the date using toLocaleDateString with the specified options
    const formattedDate = date.toLocaleDateString('en-US', options);
  
    return formattedDate;
}