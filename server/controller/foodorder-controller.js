import foodorder from "../schema/foodOrder-schema.js";

export const addFoodOrder = async (request, response) => {
    try {
        console.log(request.body);
        const TableId  = request.params.id;
        const {Customer, cart, status, time, totalamount} = request.body;

        if(!Customer || !cart || !status || !time || !totalamount || !TableId) {
            return response.status(422).json({error: 'Please fill the required feilds'})
        }

        const newFoodOrder = new foodorder({Customer, cart, status, time, totalamount, TableId})

        try {
           const foodorderAdded = await newFoodOrder.save();

           if(foodorderAdded) {
                response.status(201).json({ message: 'Food Order Placed Successfully'});
           }
        }
        catch (err) {
            response.status(409).json({ message: err.message });
        }

        console.log(newFoodOrder);
    }
    catch (err) {
        console.error(err);
    }
}

export const getOrderTicket = async (request, response) => {
    try{
        const foodorderlist = await foodorder.find({ status: 'new'})
        response.status(200).json(foodorderlist);
    } catch (err) {
        response.status(404).json({ message: err.message })
    }
}

export const getTotalOrder = async (request, response) => {
    try{
        const foodorderlist = await foodorder.find({})
        response.status(200).json(foodorderlist);
    } catch (err) {
        response.status(404).json({ message: err.message })
    }
}

export const getOrder = async (request, response) => {
    try{
        const foodorderitem= await foodorder.find({ _id: request.params.id })
        response.status(200).json(foodorderitem);
    } catch (err) {
        response.status(404).json({ message: err.message })
    }
}

export const updateStatus = async (request, response) => {
    const editorderstatus= new foodorder({status:"served"});
    try{
        await foodorder.updateOne({ _id: request.params.id}, editorderstatus)
        response.status(201).json(editorderstatus);
    } catch (err) {
        response.status(409).json({ message: err.message })
    }
}