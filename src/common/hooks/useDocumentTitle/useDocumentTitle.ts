/*
 * @Date: 2024-01-18 12:22:03
 * @Description: useDocumentTitle
 */
import { useEffect, useRef } from "react";

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  // useRef is used to keep track of the original document title
  const oldTitle = useRef(document.title).current;

  // The first useEffect updates the document title when the 'title' prop changes
  useEffect(() => {
    document.title = title;
  }, [title]);

  // The second useEffect handles cleanup when the component unmounts
  useEffect(() => {
    return () => {
      // If keepOnUnmount is false, restore the original document title
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};