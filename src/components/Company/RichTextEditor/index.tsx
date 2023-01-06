import { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const RichTextEditor = (): JSX.Element => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  console.log(editorState)
  return (
    <Editor
      wrapperClassName='border min-h-[200px]'
      editorState={editorState}
      onEditorStateChange={setEditorState}
    />
  )
}

export default RichTextEditor
