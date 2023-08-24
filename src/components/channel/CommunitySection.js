import React from "react";
import CommunitySectionItem from "./CommunitySectionItem";

const CommunitySection = () => {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-auto pt-3 pb-6">
        <>
          <div className="flex flex-row flex-wrap w-full ml-2">
            {new Array(20).fill(<CommunitySectionItem />)}
          </div>
        </>
      </div>
    </div>
  );
};

export default CommunitySection;
