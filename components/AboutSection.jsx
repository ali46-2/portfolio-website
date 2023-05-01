export default function AboutSection({ heading, detailsArr }) {
  const list = detailsArr.map(function (details, idx) {
    const name = (
      <div className="flex justify-between">
        <div className="w-[60%]">{details.name}</div>
        <div className="text-right">{details.timePeriod}</div>
      </div>
    );

    let title = <></>;
    let points = <></>;
    if (details.title) {
      title = (
        <div className="flex justify-between mt-2">
          <div className="w-[60%]">{details.title}</div>
          <div className="text-right">{details.location}</div>
        </div>
      );

      if (details.points) {
        points = details.points.map(function (point, idx) {
          return (
            <div key={idx} className="flex">
              <div>▪</div>
              <div className="ml-2">{point}</div>
            </div>
          );
        });
      }
    }

    return (
      <div key={idx} className="text-sm sm:text-base md:text-lg mt-2">
        {name}
        {title}
        <div className="mt-2 ml-2 sm:ml-4 md:ml-6">{points}</div>
      </div>
    );
  });

  return (
    <div className="my-4">
      <div className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest highlight-transition">
        {heading.toUpperCase()}
      </div>
      <hr className="dark:border-white border-black border-y-[1.5px]" />
      {list}
    </div>
  );
}
