import Questions from "../models/questionSchema";
import Result from "../models/resultSchema";
import questions, { answers } from "../database/data";

export async function getQuestions(req: any, res: any) {
  try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (error) {
    res.json({ error });
  }
}

export async function insertQuestions(req: any, res: any) {
  try {
    Questions.insertMany({ questions: questions, answers: answers }, () => {
      res.json({ msg: "Data saved successfully...." });
    });
  } catch (err) {
    res.json({ err });
  }
}

export async function deleteQuestions(req: any, res: any) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions deleted successfully" });
  } catch (error) {
    res.json({ error });
  }
}

export async function getResult(req: any, res: any) {
  try {
    const result = await Result.find();
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
}

export async function storeResult(req: any, res: any) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data not provided!");
    Result.create({ username, result, attempts, points, achived }, () => {
      res.json({ msg: "Result Saved successfully" });
    });
  } catch (error) {
    res.json({ error });
  }
}

export async function dropResult(req: any, res: any) {
  try {
    await Result.deleteMany();
    res.json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.json({ error });
  }
}
