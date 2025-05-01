// @ts-nocheck
import React, { useState } from "react";

const SoftwareLicense = () => {
  const licenseInfo = [
    {
      label: "Product",
      value: "AdB",
      iconPath: "M3 7v13h18V7H3zm0-4h18v4H3V3z",
    },
    {
      label: "Version",
      value: "V4.0.0.0",
      iconPath: "M4 4h16v16H4z M8 8h8v8H8z",
    },
    {
      label: "Licensee",
      value: "Traverse Co.",
      iconPath:
        "M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z M4 20v-2c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4z",
    },
    {
      label: "Serial No",
      value: "TVC78741100",
      iconPath: "M9 12h6M9 16h6M7 4h10l1 4H6l1-4z M6 8v12h12V8",
    },
    {
      label: "Valid From",
      value: "23-Jan-2025",
      iconPath:
        "M8 7V3m8 4V3M3 11h18M5 20h14a2 2 0 0 0 2-2V7H3v11a2 2 0 0 0 2 2z",
    },
    {
      label: "Valid To",
      value: "1-Jan-2028",
      iconPath:
        "M12 8v4l3 2M8 7V3m8 4V3M3 11h18M5 20h14a2 2 0 0 0 2-2V7H3v11a2 2 0 0 0 2 2z",
    },
  ];

  const initialModules = [
    {
      name: "Reporting",
      status: "Active",
      expiry: "1-Jan-2028",
      functions: [
        {
          name: "Generate PDFs",
          status: "Active",
          expiry: "N/A",
        },
      ],
    },
    {
      name: "User Management",
      status: "Inactive",
      expiry: "N/A",
      functions: [],
    },
    {
      name: "Analytics",
      status: "Active",
      expiry: "1-Jan-2028",
      functions: [
        {
          name: "Real-time charts",
          status: "Active",
          expiry: "N/A",
        },
      ],
    },
  ];

  const [expandedRows, setExpandedRows] = useState({});
  const [expandAll, setExpandAll] = useState(false);

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAll = () => {
    const newState = !expandAll;
    const newExpanded = {};
    initialModules.forEach((_, idx) => {
      newExpanded[idx] = newState;
    });
    setExpandedRows(newExpanded);
    setExpandAll(newState);
  };

  const ChevronIcon = ({ expanded }) => (
    <svg
      className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
        expanded ? "rotate-90" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <section>
      <div className="fixed inset-0-opacity-50 flex items-center justify-center p-6">
        <div className="h-[calc(100vh-300px)] bg-white shadow-2xl rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
          {/* Fixed Header */}
          <div className="bg-primary-500 text-white p-6 flex justify-between items-start sticky top-0 z-10 shadow-lg">
            <div>
              <h1 className="text-2xl font-bold">Software License</h1>
              <p className="text-sm opacity-90">
                License issued for authorized use of the software product
              </p>
            </div>
            <button className="text-white hover:text-gray-200 transition border border-white rounded-full p-1">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto px-6 py-2 space-y-6">
            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
              {licenseInfo.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <svg
                    className="w-5 h-5 text-primary-100 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.iconPath} />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">
                      {item.label}
                    </div>
                    <div className="text-base font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subheading */}
            <h2 className="text-lg font-semibold text-gray-800">
              Available Modules and their Functionalities
            </h2>

            {/* Modules Table */}
            <div>
              <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-indigo-100 text-indigo-800 uppercase text-xs font-semibold">
                  <tr>
                    <th className="w-10 px-2 py-3 text-center">
                      <button onClick={toggleAll} title="Expand/Collapse All">
                        <ChevronIcon expanded={expandAll} />
                      </button>
                    </th>
                    <th className="px-4 py-3">Module</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Expiry</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {initialModules.map((mod, index) => {
                    const isExpanded = expandedRows[index] || false;
                    return (
                      <React.Fragment key={index}>
                        <tr
                          className={`hover:bg-indigo-50 transition ${
                            isExpanded ? "bg-indigo-50" : ""
                          }`}
                        >
                          <td className="text-center">
                            {mod.functions.length > 0 ? (
                              <button onClick={() => toggleRow(index)}>
                                <ChevronIcon expanded={isExpanded} />
                              </button>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            {mod.name}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 text-xs rounded-full font-semibold ${
                                mod.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-50 text-red-700"
                              }`}
                            >
                              {mod.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">{mod.expiry}</td>
                        </tr>

                        {isExpanded && mod.functions.length > 0 && (
                          <tr className="bg-white border-t border-indigo-100">
                            <td></td>
                            <td colSpan="3" className="px-4 py-4">
                              <div className="text-sm text-gray-700">
                                <div className="font-medium mb-2">
                                  Functions:
                                </div>
                                <table className="w-full text-sm text-gray-700">
                                  <tbody>
                                    {mod.functions.map((func, idx) => (
                                      <tr
                                        key={idx}
                                        className="border-t border-indigo-100"
                                      >
                                        <td className="px-4 py-3 font-medium text-gray-900">
                                          {func.name}
                                        </td>
                                        <td className="px-4 py-3">
                                          <span
                                            className={`px-2 py-1 text-xs rounded-full font-semibold ${
                                              mod.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-50 text-red-700"
                                            }`}
                                          >
                                            {func.status}
                                          </span>
                                        </td>
                                        <td className="px-4 py-3">
                                          {func.expiry}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fixed Footer */}
          <div className="flex justify-center items-center gap-3 bg-gray-50 p-4 border-t sticky bottom-0 z-10">
            <p>
              <strong>Disclaimer:&nbsp;</strong>
              Unauthorized use of license is strictly prohibited and may result
              in legal action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareLicense;
