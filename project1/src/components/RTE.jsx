//rich text editor or real time editor
import React from 'react'
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from "react-hook-form"

//control -> pass on control to whatever component is using/ calling this RTE
export default function RTE({name,control, label, defaultValue=""}) {
  const tinyMCEkey ="agqvq93x1rn794oo7lw1ask0snv4esyyy25z6qm3aqth5tjy"
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller
        name={name||"content"}
        control={control}
        render={({field:{onChange}})=>(

            <Editor
            apiKey={tinyMCEkey}
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />

        )}
        />
    </div>
  )
}

 