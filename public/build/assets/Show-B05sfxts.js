import{j as e,a as l,Y as d}from"./app-CyzCxRdP.js";import{A as t}from"./AuthenticatedLayout-DdbmmVCO.js";import{T as i,a as r,c,d as m}from"./constants-Ckjsl-FG.js";import"./ApplicationLogo-BMuK4DBM.js";import"./transition-CypxOHiq.js";function N({auth:a,task:s}){return e.jsxs(t,{user:a.user,header:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:`Task "${s.name}"`}),e.jsx(l,{href:route("task.edit",s.id),className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Edit"})]}),children:[e.jsx(d,{title:`Task "${s.name}"`}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{children:e.jsx("img",{src:s.image_path,alt:"",className:"w-full h-64 object-cover"})}),e.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[e.jsxs("div",{className:"grid gap-1 grid-cols-2 mt-2",children:[e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("label",{className:"font-bold text-lg",children:"Task ID"}),e.jsx("p",{className:"mt-1",children:s.id})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Task Name"}),e.jsx("p",{className:"mt-1",children:s.name})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Task Status"}),e.jsx("p",{className:"mt-1",children:e.jsx("span",{className:"px-2 py-1 rounded text-white "+i[s.status],children:r[s.status]})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Task Priority"}),e.jsx("p",{className:"mt-1",children:e.jsx("span",{className:"px-2 py-1 rounded text-white "+c[s.priority],children:m[s.priority]})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Created By"}),e.jsx("p",{className:"mt-1",children:s.createdBy.name})]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("label",{className:"font-bold text-lg",children:"Due Date"}),e.jsx("p",{className:"mt-1",children:s.due_date})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Create Date"}),e.jsx("p",{className:"mt-1",children:s.created_at})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Updated By"}),e.jsx("p",{className:"mt-1",children:s.updatedBy.name})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Project"}),e.jsx("p",{className:"mt-1",children:e.jsx(l,{href:route("project.show",s.project.id),className:"hover:underline",children:s.project.name})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Assigned User"}),e.jsx("p",{className:"mt-1",children:s.assignedUser.name})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Task Description"}),e.jsx("p",{className:"mt-1",children:s.description})]})]})]})})})]})}export{N as default};
