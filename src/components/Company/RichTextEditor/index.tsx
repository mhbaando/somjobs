import { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { convertToHTML } from 'draft-convert'
import { EditorState } from 'draft-js'
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const RichTextEditor = ({ setFieldValue }: any): JSX.Element => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const contentState = editorState.getCurrentContent()
  const rawHTML = convertToHTML(contentState)

  return (
    <Editor
      wrapperClassName='border min-h-[200px]'
      editorState={editorState}
      onEditorStateChange={(state) => {
        setEditorState(state)
        setFieldValue('description', { content: rawHTML })
      }}
    />
  )
}

export default RichTextEditor
