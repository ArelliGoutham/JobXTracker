import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill styles

const RichTextEditor = ({ value = "", onChange, placeholder }) => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const [editorValue, setEditorValue] = useState(value);
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: placeholder || "Start typing here...",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"],
          ],
        },
      });

      // Set initial value
      quillInstance.current.root.innerHTML = value;

      // Handle text change with debounce
      quillInstance.current.on("text-change", () => {
        const newContent = quillInstance.current.root.innerHTML;

        // Update local state
        setEditorValue(newContent);

        // Clear previous debounce timer
        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        // Set new debounce timer
        debounceTimer.current = setTimeout(() => {
          if (onChange) {
            onChange(newContent);
          }
        }, 2000); // Adjust debounce delay as needed
      });
    }
  }, []);

  // Sync editor when `value` prop changes externally
  useEffect(() => {
    if (quillInstance.current) {
      const editor = quillInstance.current;
      if (editor.root.innerHTML !== value) {
        editor.root.innerHTML = value;
      }
    }
  }, [value]);

  return <div ref={editorRef} />;
};

export default RichTextEditor;
