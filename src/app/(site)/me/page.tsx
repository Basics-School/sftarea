'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AccountHeader = () => {
    return (
        <div className="flex items-center gap-4 p-4 border rounded-lg">
            <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">Welcome, John Doe</h2>
                    <Badge variant="default">Verified User</Badge>
                </div>
                <p className="text-muted-foreground">john.doe@example.com</p>
            </div>
        </div>
    );
};

const AccountActions = () => {
    return (
        <Card className="p-4">
            <h3 className="font-semibold mb-4">Account Actions</h3>
            <div className="space-y-2">
                {["Saved Properties", "Recent Searches", "Search Alerts",
                    "Shortlisted Properties", "Contacted Listings"].map((item) => (
                        <Button key={item} variant="ghost" className="w-full justify-start">
                            {item}
                        </Button>
                    ))}
            </div>
        </Card>
    );
};

const PropertyManagement = () => {
    return (
        <Card className="p-4">
            <h3 className="font-semibold mb-4">Property Management</h3>
            <div className="space-y-2">
                {["My Dashboard", "Post Property", "My Listings",
                    "Manage Enquiries", "Manage Ads & Packages"].map((item) => (
                        <Button key={item} variant="ghost" className="w-full justify-start">
                            {item}
                        </Button>
                    ))}
            </div>
        </Card>
    );
};

const ProfileSettings = () => {
    return (
        <Card className="p-4">
            <h3 className="font-semibold mb-4">Profile Settings</h3>
            <div className="space-y-2">
                {["Profile Overview", "Edit Profile", "Change Password"].map((item) => (
                    <Button key={item} variant="ghost" className="w-full justify-start">
                        {item}
                    </Button>
                ))}
            </div>
        </Card>
    );
};

const DownloadApp = () => {
    return (
        <Card className="p-4">
            <h3 className="font-semibold mb-4">Get Our App for Easy Access</h3>
            <Button className="w-full mb-4">Download Now ➝</Button>
            <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon">
                    apple
                    {/* <Icons.playStore className="h-4 w-4" /> */}
                </Button>
                <Button variant="outline" size="icon">
                    plas=tore
                    {/* <Icons.apple className="h-4 w-4" /> */}
                </Button>
            </div>
        </Card>
    );
};

const HelpSupport = () => {
    return (
        <Card className="p-4">
            <h3 className="font-semibold mb-4">Help & Support</h3>
            <div className="space-y-2">
                {["FAQs", "Customer Support", "Terms & Privacy Policy"].map((item) => (
                    <Button key={item} variant="ghost" className="w-full justify-start">
                        {item}
                    </Button>
                ))}
            </div>
        </Card>
    );
};

const MyAccountPage = () => {
    return (
        <div className="container py-6">
            <div className="grid gap-6">
                <div className="w-full">
                    <AccountHeader />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4">
                        <div className="space-y-6">
                            <AccountActions />
                            <PropertyManagement />
                            <ProfileSettings />
                            <DownloadApp />
                            <HelpSupport />
                            <Button
                                variant="destructive"
                                className="w-full"
                            >
                                Logout
                            </Button>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <h2 className="text-xl font-semibold">
                            Select an option from the menu to view details
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccountPage;
