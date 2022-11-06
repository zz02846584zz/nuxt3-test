const windiBase = "*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(0,150,255,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{line-height:inherit}body,button,input,select{font-family:inherit;margin:0}button,input,select{color:inherit;font-size:100%;line-height:1.15;line-height:inherit;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}button{background-color:transparent;background-image:none}[role=button],button{cursor:pointer}html{-webkit-text-size-adjust:100%;font-family:Nunito,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}img{border-style:solid;height:auto;max-width:100%}input::placeholder{color:#9ca3af;opacity:1}input::webkit-input-placeholder{color:#9ca3af;opacity:1}input::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder{color:#9ca3af;opacity:1}input::-ms-input-placeholder{color:#9ca3af;opacity:1}canvas,img{display:block;vertical-align:middle}ul{list-style:none;margin:0;padding:0}";

const windiComponents = "";

const windiUtilities = ".space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1.5rem*var(--tw-space-x-reverse))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-20>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(5rem*var(--tw-space-x-reverse))}.space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(2rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(2rem*var(--tw-space-x-reverse))}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.25rem*var(--tw-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-900{--tw-bg-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.bg-gray-100\\/\\[0\\.8\\]{--tw-bg-opacity:0.8;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-800\\/\\[0\\.8\\]{--tw-bg-opacity:0.8;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-800{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.bg-white\\/\\[0\\.5\\]{--tw-bg-opacity:0.5;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-900\\/\\[0\\.5\\]{--tw-bg-opacity:0.5;background-color:rgba(15,23,42,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.bg-primary-500{--tw-bg-opacity:1;background-color:rgba(0,150,255,var(--tw-bg-opacity))}.hover\\:bg-primary-400:hover{--tw-bg-opacity:1;background-color:rgba(41,167,255,var(--tw-bg-opacity))}.hover\\:bg-gray-300:hover{--tw-bg-opacity:1;background-color:rgba(209,213,219,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-slate-700:hover{--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-900{--tw-bg-opacity:1;background-color:rgba(15,23,42,var(--tw-bg-opacity))}.bg-slate-800\\/\\[0\\.75\\]{--tw-bg-opacity:0.75;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.bg-sky-500,.group:hover .group-hover\\:bg-sky-500{--tw-bg-opacity:1;background-color:rgba(14,165,233,var(--tw-bg-opacity))}.group:hover .group-hover\\:bg-gray-200{--tw-bg-opacity:1;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.dark .group:hover .dark\\:group-hover\\:bg-slate-600{--tw-bg-opacity:1;background-color:rgba(71,85,105,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-700{--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.dark .dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-600\\/30{--tw-bg-opacity:0.3;background-color:rgba(75,85,99,var(--tw-bg-opacity))}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-700\\/30:hover{--tw-bg-opacity:0.3;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(0,150,255,var(--tw-bg-opacity))}.bg-primary-700\\/45{--tw-bg-opacity:0.45;background-color:rgba(0,84,143,var(--tw-bg-opacity))}.bg-slate-500\\/40{--tw-bg-opacity:0.4;background-color:rgba(100,116,139,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.dark .dark\\:bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgba(0,117,199,var(--tw-bg-opacity))}.bg-purple-600{--tw-bg-opacity:1;background-color:rgba(124,58,237,var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgba(239,68,68,var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgba(59,166,118,var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgba(245,158,11,var(--tw-bg-opacity))}.bg-gray-200\\/90{--tw-bg-opacity:0.9;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-800\\/90{--tw-bg-opacity:0.9;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-white\\/\\[0\\.12\\]:hover{--tw-bg-opacity:0.12;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.dark .dark\\:from-green-500\\/50{--tw-gradient-from:rgba(59,166,118,.5);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,0%,100%,0))}.dark .dark\\:from-yellow-500\\/50{--tw-gradient-from:rgba(245,158,11,.5);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,0%,100%,0))}.dark .dark\\:from-red-500\\/50{--tw-gradient-from:rgba(239,68,68,.5);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,0%,100%,0))}.via-gray-200{--tw-gradient-stops:var(--tw-gradient-from),rgba(229,231,235,var(--tw-via-opacity,1)),var(--tw-gradient-to,hsla(0,0%,100%,0))}.dark .dark\\:via-slate-800{--tw-gradient-stops:var(--tw-gradient-from),rgba(30,41,59,var(--tw-via-opacity,1)),var(--tw-gradient-to,hsla(0,0%,100%,0))}.to-gray-200{--tw-gradient-to:rgba(229,231,235,var(--tw-to-opacity,1))}.dark .dark\\:to-slate-800{--tw-gradient-to:rgba(30,41,59,var(--tw-to-opacity,1))}.border-gray-900\\/10{--tw-border-opacity:0.1;border-color:rgba(17,24,39,var(--tw-border-opacity))}.dark .dark\\:border-gray-50\\/\\[0\\.2\\]{--tw-border-opacity:0.2;border-color:rgba(249,250,251,var(--tw-border-opacity))}.border-primary-500{--tw-border-opacity:1;border-color:rgba(0,150,255,var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.dark .dark\\:border-slate-800{--tw-border-opacity:1;border-color:rgba(30,41,59,var(--tw-border-opacity))}.hover\\:border-gray-900:hover{--tw-border-opacity:1;border-color:rgba(17,24,39,var(--tw-border-opacity))}.dark .dark\\:border-white{--tw-border-opacity:1;border-color:rgba(255,255,255,var(--tw-border-opacity))}.border-slate-300{--tw-border-opacity:1;border-color:rgba(203,213,225,var(--tw-border-opacity))}.dark .dark\\:border-slate-600{--tw-border-opacity:1;border-color:rgba(71,85,105,var(--tw-border-opacity))}.dark .dark\\:border-slate-500{--tw-border-opacity:1;border-color:rgba(100,116,139,var(--tw-border-opacity))}.dark .dark\\:focus\\:border-white:focus{--tw-border-opacity:1;border-color:rgba(255,255,255,var(--tw-border-opacity))}.focus\\:border-gray-900:focus{--tw-border-opacity:1;border-color:rgba(17,24,39,var(--tw-border-opacity))}.border-gray-300\\/75{--tw-border-opacity:0.75;border-color:rgba(209,213,219,var(--tw-border-opacity))}.dark .dark\\:border-slate-700\\/75{--tw-border-opacity:0.75;border-color:rgba(51,65,85,var(--tw-border-opacity))}.border-red-500,.dark .dark\\:border-red-500{--tw-border-opacity:1;border-color:rgba(239,68,68,var(--tw-border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.rounded-l{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.rounded-r{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-b-lg{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}.border-none{border-style:none}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-l{border-left-width:1px}.border-b-2{border-bottom-width:2px}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.block{display:block}.inline-block{display:inline-block}.dark .dark\\:flex,.flex{display:flex}.dark .dark\\:hidden,.hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-end{align-items:flex-end}.items-center{align-items:center}.self-center{align-self:center}.justify-items-center{justify-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-1{flex:1 1 0%}.flex-none{flex:none}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-extrabold{font-weight:800}.font-black{font-weight:900}.h-screen{height:100vh}.h-10{height:2.5rem}.h-9{height:2.25rem}.h-6{height:1.5rem}.h-full{height:100%}.h-14{height:3.5rem}.h-28{height:7rem}.h-16{height:4rem}.h-auto{height:auto}.h-3{height:.75rem}.h-13{height:3.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-8xl{font-size:6rem;line-height:1}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-5xl{font-size:3rem;line-height:1}.leading-3{line-height:.75rem}.leading-6{line-height:1.5rem}.leading-5{line-height:1.25rem}.mx-auto{margin-left:auto;margin-right:auto}.mx-4{margin-left:1rem;margin-right:1rem}.mb-2{margin-bottom:.5rem}.mb-0\\.5{margin-bottom:.125rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.ml-auto{margin-left:auto}.ml-2{margin-left:.5rem}.ml-6{margin-left:1.5rem}.mt-6{margin-top:1.5rem}.mt-2{margin-top:.5rem}.ml-1{margin-left:.25rem}.mb-4{margin-bottom:1rem}.mr-4{margin-right:1rem}.mb-6{margin-bottom:1.5rem}.mb-1{margin-bottom:.25rem}.mr-1{margin-right:.25rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mt-10{margin-top:2.5rem}.mt-1{margin-top:.25rem}.mb-0{margin-bottom:0}.max-w-8xl{max-width:90rem}.min-h-screen{min-height:100vh}.opacity-70{opacity:.7}.opacity-0{opacity:0}.opacity-100{opacity:1}.focus\\:outline-none:focus,.outline-none{outline:2px solid transparent;outline-offset:2px}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.p-1{padding:.25rem}.p-6{padding:1.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.px-8{padding-left:2rem;padding-right:2rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.py-0\\.5{padding-bottom:.125rem;padding-top:.125rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.pb-4{padding-bottom:1rem}.pt-12{padding-top:3rem}.pl-6{padding-left:1.5rem}.pl-4{padding-left:1rem}.pr-4{padding-right:1rem}.pr-3{padding-right:.75rem}.pb-2{padding-bottom:.5rem}.pr-12{padding-right:3rem}.tab,.tab\\.name{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.left-0{left:0}.bottom-0{bottom:0}.top-full{top:100%}.right-0{right:0}.-top-64{top:-16rem}.-right-0{right:0}.resize{resize:both}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0/0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.group:hover .group-hover\\:shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dark .dark\\:shadow-none,.dark .group:hover .dark\\:group-hover\\:shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.dark .dark\\:shadow-none,.dark .group:hover .dark\\:group-hover\\:shadow-none,.shadow{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow-white\\/50{--tw-shadow-color:hsla(0,0%,100%,.5);--tw-shadow:var(--tw-shadow-colored)}.dark .dark\\:shadow-slate-900\\/50{--tw-shadow-color:rgba(15,23,42,.5);--tw-shadow:var(--tw-shadow-colored)}.group:hover .group-hover\\:shadow-sky-200{--tw-shadow-color:#bae6fd;--tw-shadow:var(--tw-shadow-colored)}.focus\\:ring-1:focus,.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.dark .dark\\:ring-0,.focus\\:ring-1:focus,.ring-1{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.dark .dark\\:ring-0{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.dark .focus\\:dark\\:ring-offset-gray-50:focus{--tw-ring-offset-opacity:1;--tw-ring-offset-color:rgba(249,250,251,var(--tw-ring-offset-opacity))}.focus\\:ring-offset-gray-800\\/\\[0\\.6\\]:focus{--tw-ring-offset-opacity:[0.6];--tw-ring-offset-color:rgba(31,41,55,var(--tw-ring-offset-opacity))}.focus\\:ring-offset-1:focus{--tw-ring-offset-width:1px}.dark .focus\\:dark\\:ring-gray-400:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(156,163,175,var(--tw-ring-opacity))}.focus\\:ring-gray-600\\/\\[0\\.6\\]:focus{--tw-ring-opacity:0.6;--tw-ring-color:rgba(75,85,99,var(--tw-ring-opacity))}.ring-slate-900\\/5{--tw-ring-opacity:0.05;--tw-ring-color:rgba(15,23,42,var(--tw-ring-opacity))}.group:hover .group-hover\\:ring-slate-900\\/10{--tw-ring-opacity:0.1;--tw-ring-color:rgba(15,23,42,var(--tw-ring-opacity))}.ring-gray-900\\/10{--tw-ring-opacity:0.1;--tw-ring-color:rgba(17,24,39,var(--tw-ring-opacity))}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-gray-800{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.dark .dark\\:text-gray-200{--tw-text-opacity:1;color:rgba(229,231,235,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgba(59,166,118,var(--tw-text-opacity))}.text-orange-500{--tw-text-opacity:1;color:rgba(249,115,22,var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgba(55,65,81,var(--tw-text-opacity))}.dark .dark\\:text-gray-100{--tw-text-opacity:1;color:rgba(243,244,246,var(--tw-text-opacity))}.text-slate-600{--tw-text-opacity:1;color:rgba(71,85,105,var(--tw-text-opacity))}.hover\\:text-red-500:hover{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity))}.dark .dark\\:text-gray-400{--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity))}.dark .dark\\:hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.dark .dark\\:text-gray-300{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}.text-primary-500{--tw-text-opacity:1;color:rgba(0,150,255,var(--tw-text-opacity))}.text-slate-800{--tw-text-opacity:1;color:rgba(30,41,59,var(--tw-text-opacity))}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark .dark\\:text-gray-800,.hover\\:text-gray-800:hover{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.dark .dark\\:hover\\:text-gray-100:hover{--tw-text-opacity:1;color:rgba(243,244,246,var(--tw-text-opacity))}.hover\\:text-slate-900:hover{--tw-text-opacity:1;color:rgba(15,23,42,var(--tw-text-opacity))}.dark .hover\\:dark\\:text-white:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.text-sky-500{--tw-text-opacity:1;color:rgba(14,165,233,var(--tw-text-opacity))}.dark .dark\\:text-sky-400{--tw-text-opacity:1;color:rgba(56,189,248,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}.text-gray-100{--tw-text-opacity:1;color:rgba(243,244,246,var(--tw-text-opacity))}.dark .dark\\:text-gray-50{--tw-text-opacity:1;color:rgba(249,250,251,var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgba(51,65,85,var(--tw-text-opacity))}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.italic{font-style:italic}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.hover\\:underline:hover,.underline{text-decoration-line:underline}.hover\\:no-underline:hover{text-decoration:none}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.align-middle{vertical-align:middle}.w-screen{width:100vw}.w-full{width:100%}.w-6{width:1.5rem}.w-10{width:2.5rem}.w-36{width:9rem}.w-14{width:3.5rem}.w-28{width:7rem}.w-16{width:4rem}.w-3{width:.75rem}.w-100{width:25rem}.z-50{z-index:50}.z-40{z-index:40}.z-30{z-index:30}.z-10{z-index:10}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.translate-x-64{--tw-translate-x:16rem}.translate-y-4{--tw-translate-y:1rem}.translate-x-18{--tw-translate-x:4.5rem}.translate-y-20{--tw-translate-y:5rem}.-translate-x-4{--tw-translate-x:-1rem}.-translate-y-40{--tw-translate-y:-10rem}.transition-colors{transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition{transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.duration-300{transition-duration:.3s}.duration-200{transition-duration:.2s}.drop-shadow-xl{--tw-drop-shadow:drop-shadow(0 20px 13px rgba(0,0,0,.03)) drop-shadow(0 8px 5px rgba(0,0,0,.08))}.backdrop-filter{--tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-md{--tw-backdrop-blur:blur(12px)}.backdrop-blur-lg{--tw-backdrop-blur:blur(16px)}.backdrop-blur{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}@media (min-width:768px){.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.md\\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.md\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:flex-row{flex-direction:row}.md\\:flex-col{flex-direction:column}.md\\:justify-start{justify-content:flex-start}.md\\:justify-between{justify-content:space-between}.md\\:float-right{float:right}.md\\:text-left{text-align:left}.md\\:text-right{text-align:right}.md\\:w-auto{width:auto}.md\\:w-1\\/6{width:16.666667%}.md\\:w-full{width:100%}.md\\:w-1\\/3{width:33.333333%}.md\\:w-5\\/8{width:62.5%}.md\\:w-3\\/8{width:37.5%}}@media (min-width:1024px){.lg\\:border-gray-900\\/10{--tw-border-opacity:0.1;border-color:rgba(17,24,39,var(--tw-border-opacity))}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:mx-0{margin-left:0;margin-right:0}.lg\\:ml-60{margin-left:15rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:pl-0{padding-left:0}.lg\\:pl-8{padding-left:2rem}.lg\\:w-60{width:15rem}.lg\\:z-50{z-index:50}}@media (min-width:1280px){.xl\\:text-8xl{font-size:6rem;line-height:1}.xl\\:ml-80{margin-left:20rem}.xl\\:w-80{width:20rem}}@media (min-width:1536px){.\\32 xl\\:text-9xl{font-size:8rem;line-height:1}}";

const Gem_vue_vue_type_style_index_0_scoped_9fa2f2ec_lang = ".webgl[data-v-9fa2f2ec]{height:300px;opacity:0;outline:none;transition:opacity 1s ease;width:300px}";

const Switch_vue_vue_type_style_index_0_lang = ".switch-checkbox:checked{right:0}.switch-checkbox:checked+.switch-label{--tw-bg-opacity:1;background-color:rgba(0,150,255,var(--tw-bg-opacity))}";

const interopDefault = r => r.default || r || [];
const styles = {
  entry: () => [windiBase, windiComponents, windiUtilities, Gem_vue_vue_type_style_index_0_scoped_9fa2f2ec_lang, Switch_vue_vue_type_style_index_0_lang],
  "node_modules/.pnpm/@nuxt+content@2.2.0/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue": () => import('./_nuxt/ProseCode-styles.a510b10e.mjs').then(interopDefault),
  "pages/index.vue": () => import('./_nuxt/index-styles.dc9a2c8d.mjs').then(interopDefault),
  "components/Gem.vue": () => import('./_nuxt/Gem-styles.237e27bc.mjs').then(interopDefault),
  "node_modules/.pnpm/@nuxt+ui-templates@0.4.0/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue": () => import('./_nuxt/welcome-styles.63f7a649.mjs').then(interopDefault),
  "components/Form/Switch.vue": () => import('./_nuxt/Switch-styles.8e2db277.mjs').then(interopDefault),
  "node_modules/.pnpm/@nuxt+ui-templates@0.4.0/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": () => import('./_nuxt/error-404-styles.b59a5da0.mjs').then(interopDefault),
  "node_modules/.pnpm/@nuxt+ui-templates@0.4.0/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": () => import('./_nuxt/error-500-styles.a5affedd.mjs').then(interopDefault)
};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': styles
});

export { Gem_vue_vue_type_style_index_0_scoped_9fa2f2ec_lang as G, Switch_vue_vue_type_style_index_0_lang as S, styles$1 as s };
//# sourceMappingURL=styles.mjs.map