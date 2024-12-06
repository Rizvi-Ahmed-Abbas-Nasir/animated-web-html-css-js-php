<?php
$ProjectTitle = $_POST['project-title'];
$ClientBrandName = $_POST['client-brand'];
$email = $_POST['email'];
$ContactNumber = $_POST['contact-number'];
$TypeOfProject = $_POST['type-of-project'];
$SizeOfCompany = $_POST['size-of-company'];
$BriefInfoText = $_POST['brief-info-text'];
$BrandNieceInfo = $_POST['brand-Niece-info'];
$ProductType = $_POST['product-type'];
$MinBudget = $_POST['min-budget'];
$MaxBudget = $_POST['max-budget'];
$RequirementsGraphics = $_POST['graphics-checkbox'];
$RequirementsVFX = $_POST['vfx-checkbox'];
$RequirementsDevelopment = $_POST['Development-checkbox'];

$RequirementsGraphicsAll=implode(",", $RequirementsGraphics);
$RequirementsVFXAll=implode(",", $RequirementsVFX);
$RequirementsDevelopmentAll=implode(",", $RequirementsDevelopment);

$to = "contact@cleverstudio.in, aditya@cleverstudio.in";
$subject = "Mail From Cleverstudio (Admin)";
$body ="Project Title = ". $ProjectTitle . "\r\n\n Client Brand Name = " . $ClientBrandName . "\r\n\n Email = " . $email . "\r\n\n Contact Number = " . $ContactNumber . "\r\n\n Type of Project = " . $TypeOfProject . "\r\n\n Size OF Company = " . $SizeOfCompany . "\r\n\n Project Brief Info =" . $BriefInfoText . "\r\n\n Brand Company Niche info = " . $BrandNieceInfo . "\r\n\n Product Type = " . $ProductType . "\r\n\n Minimum Budget for this project = " . $MinBudget . "\r\n\n Maximum Budget for this project = " . $MaxBudget . "\r\n\n Requirements - Graphics =" . $RequirementsGraphicsAll . "\r\n\n Requirements - VFX =" . $RequirementsVFXAll . "\r\n\n Requirements - Development =" . $RequirementsDevelopmentAll;

$headers .= "From: Clever Studio <no-reply@cleverstudio.in>" . "\r\n" .
"CC: kushal@cleverstudio.in";

if($email!=NULL){
    mail($to,$subject,$body,$headers);
}
header("Location:../thankyou.html");
?>