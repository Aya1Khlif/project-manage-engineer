import{j as e,Y as h,a}from"./app-CyzCxRdP.js";import{A as n}from"./AuthenticatedLayout-DdbmmVCO.js";import{T as o,a as p}from"./constants-Ckjsl-FG.js";import"./ApplicationLogo-BMuK4DBM.js";import"./transition-CypxOHiq.js";function b({auth:r,totalPendingTasks:t,myPendingTasks:d,totalProgressTasks:l,myProgressTasks:x,totalCompletedTasks:i,myCompletedTasks:c,activeTasks:m}){return e.jsxs(n,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Dashboard"}),children:[e.jsx(h,{title:"Dashboard"}),e.jsxs("div",{className:"py-12",children:[e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[e.jsx("h3",{className:"text-amber-500 text-2xl font-semibold",children:"Pending Tasks"}),e.jsxs("p",{className:"text-xl mt-4",children:[e.jsx("span",{className:"mr-2",children:d}),"/",e.jsx("span",{className:"ml-2",children:t})]})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[e.jsx("h3",{className:"text-blue-500 text-2xl font-semibold",children:"In Progress Tasks"}),e.jsxs("p",{className:"text-xl mt-4",children:[e.jsx("span",{className:"mr-2",children:x}),"/",e.jsx("span",{className:"ml-2",children:l})]})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[e.jsx("h3",{className:"text-green-500 text-2xl font-semibold",children:"Completed Tasks"}),e.jsxs("p",{className:"text-xl mt-4",children:[e.jsx("span",{className:"mr-2",children:c}),"/",e.jsx("span",{className:"ml-2",children:i})]})]})})]}),e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[e.jsx("h3",{className:"text-gray-200 text-xl font-semibold",children:"My Active Tasks"}),e.jsxs("table",{className:"mt-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-3",children:"ID"}),e.jsx("th",{className:"px-3 py-3",children:"Project Name"}),e.jsx("th",{className:"px-3 py-3",children:"Name"}),e.jsx("th",{className:"px-3 py-3",children:"Status"}),e.jsx("th",{className:"px-3 py-3",children:"Due Date"})]})}),e.jsx("tbody",{children:m.data.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2",children:s.id}),e.jsx("td",{className:"px-3 py-2 text-white hover:underline",children:e.jsx(a,{href:route("project.show",s.project.id),children:s.project.name})}),e.jsx("td",{className:"px-3 py-2 text-white hover:underline",children:e.jsx(a,{href:route("task.show",s.id),children:s.name})}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:"px-2 py-1 rounded text-nowrap text-white "+o[s.status],children:p[s.status]})}),e.jsx("td",{className:"px-3 py-2 text-nowrap",children:s.due_date})]},s.id))})]})]})})})]})]})}export{b as default};
