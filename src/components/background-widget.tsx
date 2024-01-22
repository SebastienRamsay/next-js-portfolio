'use client';


export default function BackgroundWidget() {

    let widget = document.getElementById('widget')

    document.addEventListener("mousemove", (e) => {
        
       
      });

  return (
    <div id='widget'>
        <div className="-z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"/>
        <div className="dark:bg-[#676394] z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem]"/>
    </div>
  );
}
