/* Return a GUID that is unique to the component file */
export default () => {
	return useGUID(getCurrentInstance()?.vnode?.type?.__file);
};
