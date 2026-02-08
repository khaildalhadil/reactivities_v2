// import AddPost from "./AddPost";
// import Post from "./Post";
// import { useQuery } from "@tanstack/react-query";

// import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Home() {

  // const {data, error, isLoading} = useQuery(['posts'], getAllPost);
  // const {data, error, isError,isLoading} = useQuery({
  //   queryKey: ['posts'], 
  //   queryFn: getAllPost,
  //   // 1000 -> ثانيه علشان تكون الداتا قديمه يبالها جلب مره ثانية
  //   staleTime: 1000,
  //   gcTime: 1000
  // });

  // const reveredData = data?.toReversed();

  // const queryClient = useQueryClient();

  // const deleteMutation = useMutation({
  //   mutationFn: deletePost,
  //   onSuccess() {
  //     queryClient.invalidateQueries({queryKey: ["posts"]});
  //   },
  //   onError(err) {
  //     console.log(err.message)
  //   }
  // })

  // async function handelDeletePost(id) {

  //   setIsOpen(true);
  //   // const res = await deletePost(id);
  //   await deleteMutation.mutateAsync(id);
    
  // }
  
  // if (isLoading) return <div>Loadding .... </div>
  // if (isError) return <div> Error 🚫 {error.message}</div>

  return (
    <>
      {/* {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}  > want to Delete  </Modal>} */}
      <div className=" bg-gray-50 h-full p-10 flex flex-col gap-1">
        {/* <AddPost /> */}
        <p>Hello World</p>
        {/* {reveredData.length <= 0 && <p>MT NO POST YET</p>}
        {reveredData.map((post, i) => <Post key={i} post={post} handelDeletePost={handelDeletePost} />)} */}
      </div>  
    </>
  )
}
