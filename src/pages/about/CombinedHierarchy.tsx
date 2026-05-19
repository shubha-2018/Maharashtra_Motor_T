import React from "react";

import OrganizationalChart from "../../components/FlowChart";

import Hierarchy from "./Hierarchy";

const CombinedHierarchy = () => {
  return (
    <div className="w-full space-y-16">
<section>
        <Hierarchy />
      </section>
      {/* TOP SECTION */}
      <section>
        <OrganizationalChart />
      </section>

      {/* BOTTOM SECTION */}
      {/* <section>
        <Hierarchy />
      </section> */}

    </div>
  );
};

export default CombinedHierarchy;