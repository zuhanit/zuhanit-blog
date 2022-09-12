import { app, db } from "..";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  setDoc,
  query,
  getDocs,
} from "firebase/firestore";
import { PostInterface } from "./post";
import dayjs from "dayjs";
import { remark } from "remark";
import strip from "strip-markdown";

export interface DbPostInterface extends PostInterface {
  plain: string;
}

class DataService {
  public db = db;

  public async getPost(id: string): Promise<DbPostInterface | undefined> {
    const docRef = doc(this.db, "posts", id);
    const postSnap = await getDoc(docRef);

    if (postSnap) {
      return postSnap.data() as DbPostInterface;
    } else {
      return undefined;
    }
  }

  public async uploadPost(post: Omit<PostInterface, "id" | "date">) {
    const postID = post.title.replace(/ /g, "-").toLowerCase();
    const docRef = doc(this.db, "posts", postID);
    const plainBody = await remark().use(strip).process(post.body);
    await setDoc(docRef, {
      id: postID,
      title: post.title,
      body: post.body,
      date: dayjs().toString(),
      plain: String(plainBody).replace(/\n/g, " "),
      tags: post.tags,
    });
  }

  public async getPosts(): Promise<DbPostInterface[]> {
    const docRef = await getDocs(collection(this.db, "posts"));
    const result = docRef.docs.map((doc) => doc.data() as DbPostInterface);
    return result;
  }

  public async searchPost(value: string) {
    const docs = await this.getPosts();
    if (value !== "") {
      const result = docs.filter(
        (doc) => doc.plain.includes(value) || doc.title.includes(value)
      );
      return result;
    } else return undefined;
  }
}

export default new DataService() as DataService;
